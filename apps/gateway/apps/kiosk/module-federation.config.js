module.exports = {
  name: 'kiosk',
  exposes: {
    './Module': 'apps/kiosk/src/app/remote-entry/entry.module.ts',
  },
};
