import reflex as rx

config = rx.Config(
    app_name="chromalabs",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ]
)