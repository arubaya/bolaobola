var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BJDD2A2BAinvR6c9oWJLHa9_uc76x0WYCAWYXP2kNJCViGo4PESWq8u-BrhMtdBPLzc2UJDbaMDzHzsWmrDhnIs",
   "privateKey": "aXFyxJps05EKbMvdrF-XY0TSopxSrVxRsJnWtwEoqGk"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
let pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/c0GINQTHc_w:APA91bF2eO4QHcWksraWsiZGN4wgRca4K9nb4_cQG2Soplw18HgJbAnSqaJqtnZ4eyh8NCXACjCHQeOq6HqoLGgter3ma_IwfFTIoVs1-h6X2gRBaBQ9Y0yMdKZ8obz8yHCiIRdrg2vw",
   "keys": {
       "p256dh": "BKppQS8ufD5fYKCnhDAAh2EFW4Ult6BpsbEMg35d0lxXEKiPm/CO4tP7QLfMV7lIn7km9EktdobStFc2K9vsh50=",
       "auth": "3M6GHPwAdGVcrJYyKN3GPw=="
   }
};
let payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
let options = {
   gcmAPIKey: '285903681585',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);