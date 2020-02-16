import * as fs from 'fs-extra'
import * as webpack from 'webpack'
import { defaults } from 'lodash'

import { generateAppPages, setAppPages } from '../util/helper'

const PLUGIN_NAME = 'MainPlugin'

interface IMainPluginOptions {
  sourceDir: string,
  outputDir: string,
  routerConfig: any
}

export default class MainPlugin {
  options: IMainPluginOptions
  appEntry: string
  sourceDir: string
  outputDir: string
  constructor (options = {}) {
    this.options = defaults(options || {}, {
      sourceDir: '',
      outputDir: '',
      routerConfig: {}
    })
    this.sourceDir = this.options.sourceDir
    this.outputDir = this.options.outputDir
  }

  tryAsync = fn => async (arg, callback) => {
		try {
			await fn(arg)
			callback()
		} catch (err) {
			callback(err)
		}
	}

  apply (compiler) {
    this.appEntry = this.getAppEntry(compiler)
    compiler.hooks.run.tapAsync(
			PLUGIN_NAME,
			this.tryAsync(() => {
				this.run()
			})
    )
    compiler.hooks.watchRun.tapAsync(
			PLUGIN_NAME,
			this.tryAsync((compiler: webpack.Compiler) => {
        const changedFiles = this.getChangedFiles(compiler)
        if (!changedFiles.length) {
          this.run()
        } else {
          this.watchRun(changedFiles)
        }
			})
    )
  }

  getAppEntry (compiler) {
    const { entry } = compiler.options
    function getEntryPath (entry) {
      const app = entry['app']
      if (Array.isArray(app)) {
        return app[app.length - 1]
      }
      return app
    }
    const appEntryPath = getEntryPath(entry)
    return appEntryPath
  }

  run () {
    const appEntryPath = this.appEntry
    const appCode = fs.readFileSync(appEntryPath).toString()
    const pages = generateAppPages(appEntryPath, appCode, this.options.routerConfig)
    setAppPages(pages)
  }

  watchRun (changedFiles: string[]) {
    const changedFile = changedFiles[0]
    if (this.appEntry === changedFile) {
      this.run()
    }
  }

  getChangedFiles (compiler) {
    const { watchFileSystem } = compiler
    const watcher = watchFileSystem.watcher || watchFileSystem.wfs.watcher

    return Object.keys(watcher.mtimes)
  }
}
