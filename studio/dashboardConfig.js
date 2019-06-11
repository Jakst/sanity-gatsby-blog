export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d00108e4636e2e32179b96e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ezwssds3',
                  apiId: 'e3bce74e-8d4b-464c-bf31-72be8cb61e09'
                },
                {
                  buildHookId: '5d00108e4636e2ce2479b97f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-r5ygjx9o',
                  apiId: '9189577d-bbec-4d79-83e6-dbccf70cab22'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jakst/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-r5ygjx9o.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
