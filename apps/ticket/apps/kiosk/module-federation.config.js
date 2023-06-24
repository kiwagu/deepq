module.exports = {
  name: 'kiosk',
  exposes: {
    './Module': 'apps/ticket/apps/kiosk/src/app/remote-entry/entry.module.ts',
  },
};
