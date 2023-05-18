import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp } from '@inertiajs/vue3'


createInertiaApp({

  render: renderToString,
  resolve: name => require(`./Pages/${name}`),
  title: title => title ? `${title} - Ping CRM` : 'Ping CRM',
  setup({ app, props, plugin }) {
    return createSSRApp({
      render: () => h(app, props),
    }).use(plugin)
  },
})
