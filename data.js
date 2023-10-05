const KH = [
  {
    title: "1. How big is your app?",
    options: [
      {
        text: "Small",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/small@2x-d58c5d533621f5fe7ffd8f4cbdd556ebdb723639c371de1570405064fd0ade61.png",
        tooltipText:
          "Your app probably has around 2-3 key feature screens (excluding any static content, sign in, sign up etc.)",
      },
      {
        text: "Medium",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/medium@2x-3f73284910e08d5750e163b0a57ba1e2950428883a8b4e7e9b0a84222769046e.png",
        tooltipText:
          " Your app probably has around 4-7 key feature screens (excluding any static content, sign in, sign up etc.) ",
      },
      {
        text: "Large",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/large@2x-c7fc2c376674be4b7afabc7292144218c991c7c2e1b7a126d0040e607db43da5.png",
        tooltipText:
          " Your app probably has around 8-12 key feature screens (excluding any static content, sign in, sign up etc.) ",
      },
    ],
    type: "radio",
  },
  {
    title: "2. What level of UI would you like?",
    options: [
      {
        text: "MVP",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/mvp@2x-9434764c1bc0fbfb2a3eff18f45ceb107951a46993b4cd446d6702078a1bcb89.png",
        tooltipText: "Minimum Viable Product. Very raw but functional.",
      },
      {
        text: "Basic",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/basic@2x-1b2b2488069b31b0f0dbc2a74f2e9db36e60f47009473bdcb42001c369e4549c.png",
        tooltipText: "Still quite basic but pleasing to the eye.",
      },
      {
        text: "Polished",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/polished@2x-4f3e2b9c22e6351d650d650bd5e8c75b7db7c286f5195cd2fa75a76fe569aa7e.png",
        tooltipText:
          "Professional bespoke UI design. May also have some animations and transitions etc.",
      },
    ],
    type: "radio",
  },
  {
    title: "3. Users & Accounts",
    options: [
      {
        text: "Email / Password Sign Up",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/email_password_sign_up@2x-a5cf07d56027a867ce801374a02948cc4ea3067ca6d857c7a4a6ffe1682c90ca.png",
        tooltipText: "Classic sign up with an email and password.",
      },
      {
        text: "Facebook Sign Up",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/facebook_sign_up@2x-46a0d49da8179794cc9297cd0a4fb6290578a27b4109aa99718508c38736bdda.png",
        tooltipText: "Sign up and sign in with a Facebook account",
      },
      {
        text: "Twitter Sign Up",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/twitter_sign_up@2x-b4c574ccb07b8044b63042c1733df3948b4394d2cb477cda54e6b3702ca0de06.png",
        tooltipText: "Sign up and sign in with a Twitter account.",
      },
      {
        text: "Google Sign Up",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/google_sign_up@2x-c773648d1999c26fcd27151d61aeb24712438c21ad95e231dd21d70a91742ac9.png",
        tooltipText: "Sign up and sign in with a Google account.",
      },
      {
        text: "LinkedIn Sign Up",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/linkedin_sign_up@2x-1bfd2074927c7eba61df0066bad279b88bfd6420bb42f5fc7c2dd5c743b41466.png",
        tooltipText: "Sign up and sign in with a LinkedIn account.",
      },
      {
        text: "Github Sign Up",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/github_sign_up@2x-7b55964a246f6452cf214756d22f9068339d9e032b286e74b70de2ebbe72842e.png",
        tooltipText: "Sign up and sign in with a Github account.",
      },
    ],
    type: "checkbox",
  },
  {
    title: "4. User Generated Content",
    options: [
      {
        text: "Activity Feed",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/activity_feed@2x-b994138610c0e95b05ff52eecb34cd59659256268b2f72c9361bfa47ecb19544.png",
        tooltipText:
          "An activity feed would perhaps show what user have been doing recently.",
      },
      {
        text: "Media Uploading",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/file_uploading@2x-917a6a59d419d662266d76c74826e484cc1e9efddd555f8254ea965c47c6b405.png",
        tooltipText:
          "Users would be able to upload audio, video or photo content",
      },
      {
        text: "User Profiles",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/user_profiles@2x-0226ea4d7cd7d13349ab4bf493bca8940dafa942597056a536275cfba2b83ee8.png",
        tooltipText:
          "Users would be able to manage and publish their profiles to other users within your app, eg Twitter profiles.",
      },
      {
        text: "Tags",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/tags@2x-b8f1b03849bce48c18740494e6e45913f86ec40d9c1378cf817a4a7243bebbf7.png",
        tooltipText:
          "Tags allow users to categorize information so that others can find relevant information.",
      },
      {
        text: "Ratings or reviews",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/ratings_review@2x-ddfcaf9789bf046b9923d7457f9246969fb319351b7088af9078dc41b267a01e.png",
        tooltipText:
          "Typical use case for ratings and reviews might be restaurant reviews or customer satisfaction ratings.",
      },
      {
        text: "Media Manipulation",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/audio_video_processing@2x-6f14ebb4c1cade64289205d316a94b09c8ff50348e0ba5aa0f3616db956564c0.png",
        tooltipText:
          "Users would be able to modify audio, video or photo content on their device (eg Filters).",
      },
      {
        text: "Searching",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/free_text_searching@2x-1521bc5f4e34274621908dc5cf25b850ae0bfc0e43bfc4ec7ca37e50c6fb3f4d.png",
        tooltipText: "Users would be able to search content",
      },
    ],
    type: "checkbox",
  },
  {
    title: "5. Mobile specific features",
    options: [
      {
        text: "App Icon Design",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/app_icon@2x-fa784e392c8a1496d392dd42686a8e65a2233d6894e813dcbc183154369df32a.png",
        tooltipText:
          "Professionally designed app icon for multiple device resolutions.",
      },
      {
        text: "Cloud Syncing",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/cloud_sync@2x-9d99506eb0eaf26c4499b49698aa5eac98196ef2e2d747feadac1b615a08b641.png",
        tooltipText:
          "Allow user data to be shared between mobile and/or desktop devices.",
      },
      {
        text: "Device Sensor Data",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/device_sensors@2x-b93195d1e2d73012d3c7a988ce800ec357a454dd594c098d4e2e78013ac9b5d1.png",
        tooltipText:
          "Ability to use and/or record data from device sensors, eg Accelerometer, Gyroscope or Compass.",
      },
      {
        text: "Barcodes or QR Codes",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/barcode_qrcode@2x-d3c8899d39c45f5af2e94884cb93d7c46f0639a903b627ca836ccc3d5141ae7f.png",
        tooltipText: "Ability to scan or display barcodes or QR codes.",
      },
      {
        text: "Health Data",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/health@2x-105fbb8655b8dbe355406152cb08581640d7595cf5adad75724cb90ebe8368d8.png",
        tooltipText:
          "Collection and/or use user health and activity related data.",
      },
    ],
    type: "checkbox",
  },
  {
    title: "6. Dates & Locations",
    options: [
      {
        text: "Calendaring",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/calendaring@2x-8e69b667148b2837524a59b4f970328fc005c7f9bb074db13fc736c472598ca4.png",
        tooltipText: "Display and capture of data in a calendar format.",
      },
      {
        text: "Display of Map data / Geolocation",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/map_data_geolocation@2x-0a2a0ea1d1326e9d47a7292dcd7ca25f886a42cbb372aed1664f8752d66ebed8.png",
        tooltipText:
          "Showing a map with data points, eg venue locations, driver locations etc.",
      },
      {
        text: "Display of custom map markers/regions",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/map_markers_regions@2x-1ce1727262f96ab9f48fe53293af37897bd8618d69604bb7a79aaea2f88c461e.png",
        tooltipText:
          "Allowing the user to select a map area visually or custom icons for different location types.",
      },
      {
        text: "Bookings",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/bookings@2x-d1441717a32c0c988b634fb738a250dbf18037531d8543b4a5be18cc7163d2f2.png",
        tooltipText: "Selecting start and end dates, managing capacity etc.",
      },
    ],
    type: "checkbox",
  },
  {
    title: "7. Social & Engagement",
    options: [
      {
        text: "Messaging",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/messaging@2x-2f2fad9e71b026c18bc409500e8aadbd1f19e6e65380ad957f08597c197b00d2.png",
        tooltipText:
          "Allowing users within the app to send messages to other account users or groups of users.",
      },
      {
        text: "Forums or commenting",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/forums_commenting@2x-cfc8f8db3cb97faf58906b2e9c75d8639f54e82788a775a1dd9cfb974f2ce01a.png",
        tooltipText:
          "Classic forum functionality for account users or simple commenting on information.",
      },
      {
        text: "Social Sharing",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/social_sharing@2x-da6ca47d4261f0bb59ec0c3dad050ce9af0ce8d949d16c9876c9bc00d4adee7a.png",
        tooltipText:
          "Ability to share pieces of information in a controlled way on social media accounts to drive engagement.",
      },
      {
        text: "Push to Facebook Open Graph",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/facebook_open_graph@2x-f7cb23d0bb2929d5af39e9630e04998e50004dedb9a0c0191bc7f7af7710e774.png",
        tooltipText:
          "Pushing content from your app directly in to the Facebook Graph.",
      },
      {
        text: "Pushing content from your app directly in to the Facebook Graph.",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/push_notifications@2x-ac9e531d6e31842b7f40f03a7acd7f96829e6663f8a0a257cac2117eaa2d31ff.png",
        tooltipText:
          "Real-time notifications between users, eg unread message counts, notifications of editing etc.",
      },
    ],
    type: "checkbox",
  },
  {
    title: "8. Billing & eCommerce",
    options: [
      {
        text: "Shopping Cart",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/shopping_cart@2x-4b88c69909121d085b92ab460aa27280c152f9dd8db6e8f093891f92fc31d5e4.png",
        tooltipText:
          "Users will be able to browse products and add them to a cart.",
      },
      {
        text: "In-App Purchasing",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/in_app_purchasing@2x-f715afdacf141c3707b806921350fbc3c959f819b2210e9acffc0ed24305bcdd.png",
        tooltipText:
          "Ability for the user to purchase additional content or functionality within the app.",
      },
      {
        text: "Payment Information Collection",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/payment_collection@2x-6ff72fe09912488af701fd7d4b6d56d6010bbb7fc20fa7b1cf675bf2609b16da.png",
        tooltipText:
          "Ability to collect credit cards or other payment methods from users for use with a 3rd party payment provider.",
      },
      {
        text: "Payment processing",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/payment_processing@2x-fc0b2e76b0bafb102a6f13efa0069618876f9616b45e6a8fe7b6688a35f75a8d.png",
        tooltipText:
          "You will process adhoc or regular payments from users and manage refunds etc.",
      },
    ],
    type: "checkbox",
  },
  {
    title: "9. Admin, Feedback & Analytics",
    options: [
      {
        text: "Intercom",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/intercom@2x-14d426309b15542f20d8feb59fb2128b22065699563efec48f21bd88b298f52d.png",
        tooltipText:
          "A leading third party platform for managing user engagement, drip emails, feature announcements etc.",
      },
      {
        text: "Usage Analytics",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/user_analytics@2x-57d30d34ddfb1693e990b035837579174fd5075a87e2a2e78bfebdaa385993c7.png",
        tooltipText:
          "Find out where your users come from and how they use your app. Flurry, Mixpanel etc.",
      },
      {
        text: "Crash Reporting",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/crash_reporting@2x-ffdfa0f67fb7b63995e35129d328fbb29dc9e649ddde2e9a2f7f5f56fe104699.png",
        tooltipText:
          "When things go wrong you need to know, we recommend Sentry.",
      },
      {
        text: "Multilingual Support",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/multilingual_support@2x-23a8d97e31bb2056b1a105301b5a19b8fc1e90bef2d68f037c8945d76bacc362.png",
        tooltipText: "Provide supprt for multiple languages for your app.",
      },
    ],
    type: "checkbox",
  },
  {
    title: "10. External APIs and Integrations",
    options: [
      {
        text: "Connect to one or more third party services",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/third_party_services@2x-0e6189f4ae932f4f5189e93f659653eea3f272a0fc72e4c98537fab3dd3b5285.png",
        tooltipText:
          "Perhaps a data feed that you need to integrate with or a partner app",
      },
      {
        text: "SMS Messaging",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/sms_messaging@2x-fcfb4c64d3f4cb031e55fcfcdccd402b801cd8fc4bdf8aeb4939807e970dd623.png",
        tooltipText: "Allow your app to send SMS messages.",
      },
      {
        text: "Phone Number Masking",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/phone_number_masking@2x-07e8147ad8aee5badcde17fcd445220dea988a7256d9e0ab748c4be0a0aafebb.png",
        tooltipText:
          "Calls made through your app with have masked phone numbers.",
      },
    ],
    type: "checkbox",
  },
  {
    title: "11. Security",
    options: [
      {
        text: "Two Factor Authentication",
        image:
          "https://d3h99m5mv5zvgz.cloudfront.net/assets/two_factor_authentication@2x-ec2752e76cca0825691eadeeac3c1e56c54ace05a4cccf708f4d9fd575da556f.png",
        tooltipText:
          "More common for financial or highly sensitive information based apps, this requires your user supplies additional information above a simple password.",
      },
    ],
    type: "checkbox",
  },
];
