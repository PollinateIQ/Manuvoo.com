# Cal.com Integration Setup - COMPLETE! ✅

Your Cal.com booking system has been fully integrated and configured!

## ✅ Configuration Complete

- ✓ Cal.com React package installed
- ✓ API key configured: `cal_live_51ab9dcff762568b6167fe6791891acd`
- ✓ Server: cal.eu (European)
- ✓ Username: pollinate-iq-admin
- ✓ Email: Pollinateiq@gmail.com
- ✓ CalButton component created with cal.eu domain
- ✓ All "Book a Demo" buttons updated

## 🔗 Your Booking Links

You have three event types configured:

1. **Demo** (Main CTA): https://cal.eu/pollinate-iq-admin/demo
2. **Training**: https://cal.eu/pollinate-iq-admin/training
3. **Quick Chat**: https://cal.eu/pollinate-iq-admin/quick-chat

The "Book a Demo" buttons currently use the **demo** event type.

## 🎯 How It Works

When users click "Book a Demo" anywhere on your site:
1. A beautiful Cal.com modal popup will appear
2. Users can select a time slot from your calendar
3. Bookings are managed through your Cal.com dashboard
4. The modal uses your brand colors (orange theme)

## 🎨 Customization

The Cal.com embed is configured in `src/components/CalButton.tsx` with:
- Dark theme
- Orange brand color (#f97316)
- Month view layout

You can customize these settings in the `CalButton` component if needed.

## 📍 Where It's Used

The Cal.com integration is used in:
- Hero section (main CTA)
- CTA section (call-to-action)
- Contact page (demo booking)

All buttons will open the Cal.com booking modal instead of redirecting to a separate page.

## 🔐 Security Note

Your API key (`cal_live_51ab9dcff762568b6167fe6791891acd`) is stored in `src/config/booking.ts`. This is a live API key, so keep it secure and don't expose it publicly if you plan to use webhooks or server-side features.

## ✅ Testing

After updating your username and event type:
1. Start your dev server: `npm run dev`
2. Click any "Book a Demo" button
3. The Cal.com modal should open with your booking page
4. Test booking a demo to ensure everything works

## 📚 Need Help?

- Cal.com Documentation: https://cal.com/docs
- React Integration Guide: https://github.com/calcom/cal.com/tree/main/packages/embeds/embed-react
