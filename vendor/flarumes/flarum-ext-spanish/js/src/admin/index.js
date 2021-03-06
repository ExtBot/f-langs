import { extend } from 'flarum/common/extend';
import app from 'flarum/common/app';

app.initializers.add('flarumes-lang-spanish', () => {
    app.extensionData.for('flarumes-lang-spanish')
      .registerSetting({
        setting: 'flarumes.mode',
        type: 'select',
        label: 'Preferencia',
        options: {
          'es-ES-informal': 'España (informal)',
          'es-ES-formal': 'España (formal)'
        },
        default: 'es-ES-formal'
      });
});
