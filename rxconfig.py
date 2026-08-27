import reflex as rx

config = rx.Config(
    app_name="chromalabs",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
        rx.plugins.RadixThemesPlugin(
            theme=rx.theme(
                appearance="dark", 
                has_background=True, 
                radius="none", 
                accent_color="blue",
                gray_color="slate",
            )
        )
    ]
)