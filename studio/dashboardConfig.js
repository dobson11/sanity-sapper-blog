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
                  buildHookId: '6112dd28de851d91609b2623',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-91y6e439',
                  apiId: '6ef8cec4-e9c3-4467-8745-4730cbd60d1a'
                },
                {
                  buildHookId: '6112dd281612e1757d6f2a7e',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-zbasvgmn',
                  apiId: '5cd43a21-00cd-49cb-9fc9-9b39aabf2b63'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dobson11/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-zbasvgmn.netlify.app', category: 'apps'}
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
