let instance: any

if (instance === undefined) {
    instance = Object.assign({}, (window as any).app_config) as GlobalConfig
}
export default {
    value: instance
}
