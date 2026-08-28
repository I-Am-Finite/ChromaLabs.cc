import reflex as rx

config = rx.Config(
    app_name="chromalabs",
    env=rx.Env.PROD,
    show_built_with_reflex=False,
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