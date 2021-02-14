module.exports = {
    apps: [
        {
            name: 'strapi',
            script: 'yarn',
            args: 'start',
        },
        {
            name: 'next',
            cwd: './frontend',
            script: 'yarn',
            args: 'start',
        }
    ]
}