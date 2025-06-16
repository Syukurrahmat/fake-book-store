const defaultSEO: import('next-seo').DefaultSeoProps = {
	title: 'BukuTi',
	titleTemplate: '%s | BukuTi',
	defaultTitle: 'BukuTi',
	description: 'Cari, Temukan, dan Beli Buku teknologi dengan mudah dan cerdas',
	canonical: 'https://bukuti.vercel.app/',
	openGraph: {
		type: 'website',
		locale: 'id_ID',
		url: 'https://bukuti.vercel.app/',
		site_name: 'BukuTi',
		images: [
			{
				url: 'https://bukuti.vercel.app/og-default.png',
				width: 1200,
				height: 630,
				alt: 'Default OG Image',
			},
		],
	},
	twitter: {
		handle: '@bukuti',
		site: '@bukuti',
		cardType: 'summary_large_image',
	},
};

export default defaultSEO;
