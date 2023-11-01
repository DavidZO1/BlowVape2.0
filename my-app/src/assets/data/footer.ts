export interface Footer{
    title: string
    id: number,
    link: string
}

//footer links
export const information:Footer[] =[
    {
        link: '/store/category/accessories',
        title:'accessories',
        id: 1
    },
    {
        link:'/store/category/Vapes',
        title:'Vapes',
        id: 4
    },
    {
        link:'/store/category/liquid',
        title:'footware',
        id: 5
    },
]

export const pages:Footer[] =[
    {
        link: '/',
        title:'home',
        id: 1
    },
    {
        link: '/products',
        title:'shop',
        id: 2
    },
    {
        link: '/blog',
        title:'blog',
        id: 3
    },
    {
        link:'/contacts',
        title:'contact',
        id: 4
    }
]