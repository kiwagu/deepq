module.exports = {
  name: 'ticket-apps-kiosk',
  exposes: {
    './Module': './apps/kiosk/src/app/remote-entry/entry.module.ts',
  },
};
