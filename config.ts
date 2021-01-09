const siteMetadata = {
    title: `Joshua Kan`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: false,
    logo: `/images/jklogo.png`,
    icon: `/images/jkicon.png`,
    titleImage: `/images/DSC_1965.png`,
    ogImage: `/images/DSC_1965.png`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `Child of God | Data Scientist | Nature Appreciator | Ryan's roommate`,
    description: `Hi, my name's Josh, welcome to my portfolio website!`,
    about:
        "A passionate learner with a hard-working and open-minded attitude. Also Love music, big ideas, basketball, anime, comedy, and AI.",
    author: `@jjoshkan`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "EXPERIENCE",
            url: "/experience",
        },
        {
            name: "SKILLS",
            url: "/skill",
        },
        {
            name: "BLOG",
            url: "/blog",
        },
        {
            name: "CONTACT ME",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "Design",
            url: "https://github.com/akzhy/gatsby-starter-elemental",
        },
    ],
    social: [
        {
            name: "LinkedIn",
            icon: "/images/LinkedIn.svg",
            url: "https://www.linkedin.com/in/joshkan/",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/joshuakan_/",
        },
        {
            name: "Medium",
            icon: "/images/Medium.svg",
            url: "https://medium.com/@joshuakan_",
        },
        {
            name: "GitHub",
            icon: "/images/GitHub.svg",
            url: "https://github.com/jjoshkan",
        },
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/joshua.khanzz/",
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/jjoshkan",
        },
        {
            name: "Discord",
            icon: "/images/Discord.svg",
            url: "https://discord.gg/qgteEJkUEx",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://getform.io/f/f227a36e-096a-4c6a-9963-9f1918a85bb3",
        description: `Feel free to drop your information! Note: Your email will not be disclosed. 
        It will only be used to reply your message.`,
        mail: "jjoshkan@gmail.com",
        phone: "+1 (310) 897-9336",
        address: "Los Angeles, CA",
    },
    disqus: "elemental-netlify-com",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Enter a name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Enter a valid email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Enter a message with atleast 15 characters",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
