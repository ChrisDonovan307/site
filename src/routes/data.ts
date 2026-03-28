type ProjectItem = {
	title: string;
	content: string;
	image?: string;
	link: string;
}

type ProjectGroup = {
	group: string;
	items: ProjectItem[];
}

type Social = {
	link: string;
	label: string;
	image: string;
}

type Software = {
	link: string;
	title: string;
}

export const projects: ProjectGroup[] = [
	{
		group: 'Sustainability Metrics',
		items: [
			{
				title: 'SMdata',
				content: "<p><b>SMdata</b> is a repository that contains data collection and cleaning for the FSRI Sustainability Metrics project. Most of the wrangling is in R, but geospatial processing is handled in Python. It is also available as an R package, which makes it easy to get access to datasets as well as convenience functions for working with the metrics.</p>",
				image: 'smdata.png',
				link: "https://www.github.com/Food-Systems-Research-Institute/SMdata/"
			},
			{
				title: 'SMdocs',
				content: "<p><b>SMdocs</b> is a website that contains figures and analyses for the Sustainability Metrics project. It includes a description of the indicator selection processes, various figures describing the indicator framework, as well as analyses at the national and regional levels. It is made with Quarto.</p>",
				image: 'smdocs.png',
				link: "https://fsrc.w3.uvm.edu/sustainability_metrics/pages/index.html",
			},
			{
				title: 'SMexplorer',
				content: "<p><b>SMexplorer</b> is a Shiny app that explores food system sustainability data in the Northeast. It includes an interactive map, a metric comparison page, a county details dashboard, as well as a metadata table. It uses the Golem production-grade Shiny applications.</p>",
				image: 'smex_slim.png',
				link: "https://fsrc.w3.uvm.edu/SMexplorer/"
			}
		]
	},
	{
		group: 'AgConnect',
		items: [
			{
				title: 'AgConnect',
				content: '<p><b>AgConnect</b> is a UVM Extension platform that will facilitate on-farm research trials by connecting farmers with researchers, help manage experiments, and provide automated analyses and reports. The platform is being developed with Ruby on Rails and is expected to launch in the spring of 2026.</p>',
				image: 'agconnect.png',
				link: "https://www.uvm.edu/extension/farm/online-tool-agconnect"
			}
		]
	},
	{
		group: 'Repeated Environmental Behavior Latent Scale',
		items: [
			{
				title: 'REBL Package',
				content: '<p>The <b>REBL package</b> provides easy access to functions used to analyze administrations of the Repeated Environmental Behavior Latent (REBL) Scale, including cleaning surveys, recoding items, validating the model, and test linking to a baseline set of participants.</p>',
				image: 'rebl_package.png',
				link: "https://chrisdonovan307.github.io/rebl/index.html"
			},
			{
				title: 'REBL app',
				content: '<p>The <b>REBL Calculator</b> is a Shiny application that makes it easy to analyze a survey administration of the REBL Scale. Upload a csv and add some parameters and it will give return model validation outputs, graphs, and new tables with REBL scores to download. The app uses the Rhino framework for full-featured Shiny production.</p>',
				image: 'reblcalc.png',
				link: "https://cdonov12.w3.uvm.edu/reblcalc/"
			}
		]
	},
	{
		group: 'Grade Calculator',
		items: [
			{
				title: 'Grade Calculator',
				content: '<p>The <b>Grade Calculator</b> is a Shiny app to make life easier for TAs, specifically in CDAE 1020: World Food, Population, and Development. It takes a csv of grades and returns interactive graphs, summary statistics, and statistical tests to compare grades across cohorts.</p>',
				image: 'grade_analysis_app.png',
				link: "https://www.github.com/ChrisDonovan307/grade_analysis_app"
			}
		]
	},
	{
		group: 'Projector',
		items: [
			{
				title: 'Projector',
				content: '<p>The <b>Projector package</b> is a collection of functions for setting up an R project for data analysis. It includes some project setup tools for file structures and the ".Rprofile" script as well as convenience functions for data wrangling.</p>',
				link: "https://www.github.com/ChrisDonovan307/projecter"
			}
		]
	}
]

export const bio = "<p>I'm a Food Systems Data Scientist at the Food Systems Research Institute at the University of Vermont. I work on food system sustainability, on-farm research networks, and stewarding open and FAIR data.</p>"

export const socials: Social[] = [
	{
		link: 'mailto:christopher.donovan@uvm.edu',
		label: 'Email',
		image: '<i class="fa-regular fa-envelope"></i>'
	},
	{
		link: 'https://www.uvm.edu/ovpr/food-systems-research/profile/chris-donovan',
		label: 'FSRI',
		image: '<img src="images/fsri_spirit_mark.png" class="spirit">'
	},
	{
		link: 'https://www.github.com/ChrisDonovan307',
		label: 'GitHub',
		image: '<i class="fa-brands fa-github"></i>'
	},
	{
		link: 'https://gitlab.uvm.edu/Christopher.Donovan',
		label: 'GitLab',
		image: '<i class="fa-brands fa-gitlab"></i>'
	}
]

export const software: Software[] = [
	{
		link: "https://www.github.com/tshrum/rebl",
		title: "REBL Scale R Package"
	},
	{
		link: "https://www.github.com/ChrisDonovan307/reblcalc",
		title: "REBL Calculator Shiny App"
	},
	{
		link: "https://www.github.com/Food-Systems-Research-Institute/SMexplorer",
		title: "SMexplorer Shiny App"
	},
	{
		link: "https://www.github.com/Food-Systems-Research-Institute/SMdocs",
		title: "SMdocs Website"
	},
	{
		link: "https://www.github.com/Food-Systems-Research-Institute/SMdata",
		title: "SMdata R Package"
	},
	{
		link: "https://www.github.com/ChrisDonovan307/grade_analysis_app",
		title: "Grade Analysis Shiny App"
	},
	{
		link: "https://www.github.com/ChrisDonovan307/projecter",
		title: "Projector R Package"
	}
]