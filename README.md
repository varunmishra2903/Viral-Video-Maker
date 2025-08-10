Viral Video Maker - 1 Page Report

Challenge Tackled:
Short-form video platforms like TikTok, YouTube Shorts, and Instagram Reels thrive on speed, trends,
and creativity—but producing viral-ready content requires scripting, editing, formatting, and publishing
skills that most creators can’t do instantly. Our challenge: build an AI-driven pipeline that turns an idea
into a platform-ready, trend-optimized short video in minutes, lowering the barrier to viral content
creation.

Tools / ML Models Used:
- Next.js + Tailwind CSS – Frontend UI framework & styling
- Zustand – State management
- OpenAI GPT-4 – Script generation with hashtags, hooks, and style adaptation
- Replicate API / Pika / Runway (mock) – AI video generation
- React-Player – Video preview
- CapCut API / FFmpeg (mock) – Remixing top-performing videos
- Google Trends + TikTok Creative Center (mock) – Predictive trend radar

What Worked Well:
- Fully functional idea → script → video preview → publish simulation flow in under 8 hours
- Dynamic script generation with embedded trends and hashtags
- Smooth UI transitions and remix mode to generate multiple variants
- Modular architecture allowed rapid feature addition

What Was Challenging:
- Integrating real publishing APIs (TikTok/YouTube) within hackathon constraints — solved via mock
simulation
- AI video generation latency — used mock URLs to ensure demo reliability
- Limited real-time trend API access — substituted with static data + Google Trends simulation

How You Spent Your Time:
0–1h: Project setup, architecture, UI scaffolding
1–2h: Script generation engine
2–3h: Video generation pipeline
3–4h: One-click publish system (mock)
4–5h: Feedback loop & analytics
5–6h: AI trend radar (stretch goal)
6–7h: UI polish & remix mode
7–8h: Demo prep & dashboard
Reflection
If we had 24 more hours, we’d integrate real publishing APIs and train a custom style-aware video
generator for faster, higher-quality outputs.
