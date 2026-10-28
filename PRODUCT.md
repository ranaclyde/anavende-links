# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People who scanned a QR code printed on an Ana Vende business card. Cards are handed to two groups:

- **Buyers**, at the moment of a sale, so they can come back and buy again.
- **Non-customers at fairs (ferias)**, where Ana Vende has a stand to attract new people. Many of these visitors have never bought before and may not know the brand beyond the stand.

The visit almost always starts on a phone camera, right after a face-to-face interaction, often in a busy fair setting with divided attention.

## Product Purpose

A single "link in bio"-style page that turns a physical card into an online relationship. Its job is to route a QR visitor to the channel where they can see products and come back later.

Success: the visitor opens the main store website, **anavende.com.ar**. Secondary success: they open the WhatsApp catalog, follow on Instagram or Facebook, or message on WhatsApp.

While anavende.com.ar is not yet operational, the WhatsApp catalog takes the primary spot and the store link is left off the page. It is added back, as primary, once the site is live.

## Positioning

Ana Vende is a person-to-person seller of tech accessories ("Vos elegís la tecnología": headphones, joysticks, cables, speakers, keyboards, mice, pendrives, consoles). The page is the online continuation of a face-to-face sale or a fair conversation, not an anonymous e-commerce storefront.

## Operating Context

- Entry is via QR on a printed card, not via social bios or search.
- Channels: website anavende.com.ar (primary once live), WhatsApp catalog, Instagram, Facebook, WhatsApp direct chat.
- Content (name, subtitle phrases, links) lives in `data.json`.
- Static Astro site deployed on Netlify at anavende-links.netlify.app.

## Capabilities and Constraints

- Links out only; no cart, checkout or forms on this page.
- Payment methods and delivery area are explained on anavende.com.ar. This page does not restate them; it sends people there.
- The `socials` list in `data.json` is placeholder data and not rendered.

## Brand Commitments

- Keep the current logo: `public/anavende_logo.png`.
- Keep the voice: close, informal Rioplatense Spanish with voseo ("Seguime", "Escribime", "Vos elegís").

## Evidence on Hand

- Logo and favicons in `public/`.
- Product category list in `data.json` (`animatedSubtitle`).
- No testimonials, reviews, sales figures, prices or press. Do not fabricate them.

## Product Principles

1. **The website comes first.** Every layout decision should make opening anavende.com.ar the obvious next step.
2. **Designed for a phone in a hand, seconds after a scan.** The first screen must say who this is and what to tap, with no scrolling and no reading required.
3. **Recognizable from the card and the stand.** A fair visitor must instantly connect the page to the person and brand they just met.
4. **Human, not corporate.** Voseo and a personal tone carry the face-to-face relationship online.
