import {reactive} from "vue";

export let user = reactive({
    userIndex:0,
    userList: [
        {
            name:'张三儿子',
            password:'111',
            pic:"https://photo.colorhub.me/dSlX9AxjN-g/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vZjQvZjYvZTE3NWI1YjRmYmEwMmVhNjM5ZWFkMmRkMzhiMmJmYTZiZGMwZjRmNi5qcGc.webp",
        },
        {
            name:'李四女儿',
            password:'222',
            pic:"https://cdn.colorhub.me/WhuYAeyexF0/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNGMvMTYvMTk5ZjExMDBkMzBjZWVlYzU0MDE4YzVkMDNhYzNlOTBiNjI1NGMxNi5qcGc.webp",
        },
    ]
})