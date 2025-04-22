import {reactive,ref} from "vue";

export let storeIndex = ref();

export let store = reactive({
    currentSongLyrics: [],
    lycIndex:0,
    storename:'暂定',
    isPlay: false,
    currentTime: 0,
    endTime: 0,
    songList: [
        {
            songName:'a',
            singer:'a1',
            songPic:"https://photo.colorhub.me/dSlX9AxjN-g/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vZjQvZjYvZTE3NWI1YjRmYmEwMmVhNjM5ZWFkMmRkMzhiMmJmYTZiZGMwZjRmNi5qcGc.webp"
        },
        {
            songName:'b',
            singer:'b1',
            songPic:"https://cdn.colorhub.me/WhuYAeyexF0/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNGMvMTYvMTk5ZjExMDBkMzBjZWVlYzU0MDE4YzVkMDNhYzNlOTBiNjI1NGMxNi5qcGc.webp",
        },
        {
            songName:'c',
            singer:'c1',
            songPic:"https://img.colorhub.me/AlIVbs_-drU/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNmQvOTMvMzI3MmFhNThhN2VlZmFjMDIxOWYyMzVmNDFkZDEwN2MzZWNkNmQ5My5qcGc.webp",
        },
        {
            songName:'d',
            singer:'d1',
            songPic:"https://cdn.colorhub.me/ooSHzVa3UWg/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vY2YvNWQvNTZhMzdjODBlNzRiMTJhMTFjMDFhZmViYjk3OWJiN2Y2N2UyY2Y1ZC5qcGVn.webp",
        },
        {
            songName:'e',
            singer:'e1',
            songPic:"https://img.colorhub.me/GXi7h2upf9Y/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vZDAvZGQvYzFlOTkzNjFkMmM2NmRhZGRlYTk5NTFlYzBlYjdjNGViYjZiZDBkZC5qcGVn.webp",
        },
        {
            songName:'f',
            singer:'f1',
            songPic:"https://img.colorhub.me/8DLfPYjf4_U/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMWQvNDkvMDM4NGZiNTYxM2UyZGE0NmIwMmE5N2RlNTc1ZjNlNmM1NTg3MWQ0OS5qcGVn.webp",
        },
        {
            songName:'g',
            singer:'g1',
            songPic:"https://img.colorhub.me/zPnfoHxlxYQ/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vYmYvYzIvODllMTQwNDRmMTU1ZjJkYjc1ZDQ3MzRlNWM4MzM5MzJkYmM1YmZjMi5qcGVn.webp",
        },
        {
            songName:'h',
            singer:'h1',
            songPic:"https://photo.colorhub.me/ymTfskrwf3o/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNWQvYzUvNTBlOThhZGY0OTAyMTg1ODg4YWYzMmU2MTVmNTRmY2ZiMDQyNWRjNS5qcGc.webp",
        },
        {
            songName:'i',
            singer:'i1',
            songPic:"https://cdn.colorhub.me/ZlukudGVPRg/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMGQvNjIvOTU5YmIzZTMyNTRiZmM4OWM2ZTBkZDE5NDlkMmI3OTI3MTI1MGQ2Mi5qcGVn.webp",
        },
        {
            songName:'j',
            singer:'j1',
            songPic:"https://img.colorhub.me/DegaGlMnCSI/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMDcvOTkvMjUyMDZjNWJjNDQyMzM5ZjZjMGFlMTRjZDZhMjU4YTBkMjM2MDc5OS5qcGVn.webp",
        },
    ],
    songUrl:[
       "http://music.163.com/song/media/outer/url?id=1838919030.mp3",
        "http://music.163.com/song/media/outer/url?id=1397345903.mp3",
        "http://music.163.com/song/media/outer/url?id=2063850887.mp3",
        "http://music.163.com/song/media/outer/url?id=2096916430.mp3",
        "http://music.163.com/song/media/outer/url?id=1919430638.mp3",
        "http://music.163.com/song/media/outer/url?id=2068064661.mp3",
        "http://music.163.com/song/media/outer/url?id=1862296245.mp3",
        "http://music.163.com/song/media/outer/url?id=2000959931.mp3",
        "http://music.163.com/song/media/outer/url?id=2070261075.mp3",
        "http://music.163.com/song/media/outer/url?id=378373.mp3",
    ],
    current: 0
} );

export let recommendstore = reactive({
    storename:'recommend',
    isPlay: false,
    currentTime: 0,
    endTime: 0,
    songList: [
        {
            songName:'a-recommend',
            singer:'a-rec',
            songPic:"https://photo.colorhub.me/dSlX9AxjN-g/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vZjQvZjYvZTE3NWI1YjRmYmEwMmVhNjM5ZWFkMmRkMzhiMmJmYTZiZGMwZjRmNi5qcGc.webp"
        },
        {
            songName:'b-recommend',
            singer:'b-rec',
            songPic:"https://cdn.colorhub.me/WhuYAeyexF0/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNGMvMTYvMTk5ZjExMDBkMzBjZWVlYzU0MDE4YzVkMDNhYzNlOTBiNjI1NGMxNi5qcGc.webp",
        },
        {
            songName:'c-recommend',
            singer:'c-rec',
            songPic:"https://img.colorhub.me/AlIVbs_-drU/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNmQvOTMvMzI3MmFhNThhN2VlZmFjMDIxOWYyMzVmNDFkZDEwN2MzZWNkNmQ5My5qcGc.webp",
        },
        {
            songName:'d-recommend',
            singer:'d-rec',
            songPic:"https://cdn.colorhub.me/ooSHzVa3UWg/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vY2YvNWQvNTZhMzdjODBlNzRiMTJhMTFjMDFhZmViYjk3OWJiN2Y2N2UyY2Y1ZC5qcGVn.webp",
        },
        {
            songName:'e-recommend',
            singer:'e-rec',
            songPic:"https://img.colorhub.me/GXi7h2upf9Y/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vZDAvZGQvYzFlOTkzNjFkMmM2NmRhZGRlYTk5NTFlYzBlYjdjNGViYjZiZDBkZC5qcGVn.webp",
        },
        {
            songName:'f-recommend',
            singer:'f-rec',
            songPic:"https://img.colorhub.me/8DLfPYjf4_U/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMWQvNDkvMDM4NGZiNTYxM2UyZGE0NmIwMmE5N2RlNTc1ZjNlNmM1NTg3MWQ0OS5qcGVn.webp",
        },
        {
            songName:'g-recommend',
            singer:'g-rec',
            songPic:"https://img.colorhub.me/zPnfoHxlxYQ/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vYmYvYzIvODllMTQwNDRmMTU1ZjJkYjc1ZDQ3MzRlNWM4MzM5MzJkYmM1YmZjMi5qcGVn.webp",
        },
        {
            songName:'h-recommend',
            singer:'h-rec',
            songPic:"https://photo.colorhub.me/ymTfskrwf3o/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNWQvYzUvNTBlOThhZGY0OTAyMTg1ODg4YWYzMmU2MTVmNTRmY2ZiMDQyNWRjNS5qcGc.webp",
        },
        {
            songName:'i-recommend',
            singer:'i-rec',
            songPic:"https://cdn.colorhub.me/ZlukudGVPRg/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMGQvNjIvOTU5YmIzZTMyNTRiZmM4OWM2ZTBkZDE5NDlkMmI3OTI3MTI1MGQ2Mi5qcGVn.webp",
        },
        {
            songName:'j-love',
            singer:'j0',
            songPic:"https://img.colorhub.me/DegaGlMnCSI/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMDcvOTkvMjUyMDZjNWJjNDQyMzM5ZjZjMGFlMTRjZDZhMjU4YTBkMjM2MDc5OS5qcGVn.webp",
        },
    ],
    songUrl:[
        "http://music.163.com/song/media/outer/url?id=1838919030.mp3",
        "http://music.163.com/song/media/outer/url?id=1397345903.mp3",
        "http://music.163.com/song/media/outer/url?id=2063850887.mp3",
        "http://music.163.com/song/media/outer/url?id=2096916430.mp3",
        "http://music.163.com/song/media/outer/url?id=1919430638.mp3",
        "http://music.163.com/song/media/outer/url?id=2068064661.mp3",
        "http://music.163.com/song/media/outer/url?id=1862296245.mp3",
        "http://music.163.com/song/media/outer/url?id=2000959931.mp3",
        "http://music.163.com/song/media/outer/url?id=2070261075.mp3",
        "http://music.163.com/song/media/outer/url?id=378373.mp3",
    ],
    current: 0
});

export let lovestore = reactive({
    storename:'love',
    isPlay: false,
    currentTime: 0,
    endTime: 0,
    songList: [
        {
            songName:'a-love',
            singer:'a0',
            songPic:"https://photo.colorhub.me/dSlX9AxjN-g/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vZjQvZjYvZTE3NWI1YjRmYmEwMmVhNjM5ZWFkMmRkMzhiMmJmYTZiZGMwZjRmNi5qcGc.webp"
        },
        {
            songName:'b-love',
            singer:'b0',
            songPic:"https://cdn.colorhub.me/WhuYAeyexF0/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNGMvMTYvMTk5ZjExMDBkMzBjZWVlYzU0MDE4YzVkMDNhYzNlOTBiNjI1NGMxNi5qcGc.webp",
        },
        {
            songName:'c-love',
            singer:'c0',
            songPic:"https://img.colorhub.me/AlIVbs_-drU/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNmQvOTMvMzI3MmFhNThhN2VlZmFjMDIxOWYyMzVmNDFkZDEwN2MzZWNkNmQ5My5qcGc.webp",
        },
        {
            songName:'d-love',
            singer:'d0',
            songPic:"https://cdn.colorhub.me/ooSHzVa3UWg/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vY2YvNWQvNTZhMzdjODBlNzRiMTJhMTFjMDFhZmViYjk3OWJiN2Y2N2UyY2Y1ZC5qcGVn.webp",
        },
        {
            songName:'e-love',
            singer:'e0',
            songPic:"https://img.colorhub.me/GXi7h2upf9Y/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vZDAvZGQvYzFlOTkzNjFkMmM2NmRhZGRlYTk5NTFlYzBlYjdjNGViYjZiZDBkZC5qcGVn.webp",
        },
        {
            songName:'f-love',
            singer:'f0',
            songPic:"https://img.colorhub.me/8DLfPYjf4_U/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMWQvNDkvMDM4NGZiNTYxM2UyZGE0NmIwMmE5N2RlNTc1ZjNlNmM1NTg3MWQ0OS5qcGVn.webp",
        },
        {
            songName:'g-love',
            singer:'g0',
            songPic:"https://img.colorhub.me/zPnfoHxlxYQ/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vYmYvYzIvODllMTQwNDRmMTU1ZjJkYjc1ZDQ3MzRlNWM4MzM5MzJkYmM1YmZjMi5qcGVn.webp",
        },
        {
            songName:'h-love',
            singer:'h0',
            songPic:"https://photo.colorhub.me/ymTfskrwf3o/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNWQvYzUvNTBlOThhZGY0OTAyMTg1ODg4YWYzMmU2MTVmNTRmY2ZiMDQyNWRjNS5qcGc.webp",
        },
        {
            songName:'i-love',
            singer:'i0',
            songPic:"https://cdn.colorhub.me/ZlukudGVPRg/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMGQvNjIvOTU5YmIzZTMyNTRiZmM4OWM2ZTBkZDE5NDlkMmI3OTI3MTI1MGQ2Mi5qcGVn.webp",
        },
        {
            songName:'j-love',
            singer:'j0',
            songPic:"https://img.colorhub.me/DegaGlMnCSI/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMDcvOTkvMjUyMDZjNWJjNDQyMzM5ZjZjMGFlMTRjZDZhMjU4YTBkMjM2MDc5OS5qcGVn.webp",
        },
    ],
    songUrl:[
        "http://music.163.com/song/media/outer/url?id=1838919030.mp3",
        "http://music.163.com/song/media/outer/url?id=1397345903.mp3",
        "http://music.163.com/song/media/outer/url?id=2063850887.mp3",
        "http://music.163.com/song/media/outer/url?id=2096916430.mp3",
        "http://music.163.com/song/media/outer/url?id=1919430638.mp3",
        "http://music.163.com/song/media/outer/url?id=2068064661.mp3",
        "http://music.163.com/song/media/outer/url?id=1862296245.mp3",
        "http://music.163.com/song/media/outer/url?id=2000959931.mp3",
        "http://music.163.com/song/media/outer/url?id=2070261075.mp3",
        "http://music.163.com/song/media/outer/url?id=378373.mp3",
    ],
    current: 0
});
export const store0 = reactive({
    storename:'store0',
    isPlay: false,
    currentTime: 0,
    endTime: 0,
    songList: [
        {
            songName:'a-0',
            singer:'a0',
            songPic:"https://photo.colorhub.me/dSlX9AxjN-g/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vZjQvZjYvZTE3NWI1YjRmYmEwMmVhNjM5ZWFkMmRkMzhiMmJmYTZiZGMwZjRmNi5qcGc.webp"
        },
        {
            songName:'b-0',
            singer:'b0',
            songPic:"https://cdn.colorhub.me/WhuYAeyexF0/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNGMvMTYvMTk5ZjExMDBkMzBjZWVlYzU0MDE4YzVkMDNhYzNlOTBiNjI1NGMxNi5qcGc.webp",
        },
        {
            songName:'c-0',
            singer:'c0',
            songPic:"https://img.colorhub.me/AlIVbs_-drU/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNmQvOTMvMzI3MmFhNThhN2VlZmFjMDIxOWYyMzVmNDFkZDEwN2MzZWNkNmQ5My5qcGc.webp",
        },
        {
            songName:'d-0',
            singer:'d0',
            songPic:"https://cdn.colorhub.me/ooSHzVa3UWg/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vY2YvNWQvNTZhMzdjODBlNzRiMTJhMTFjMDFhZmViYjk3OWJiN2Y2N2UyY2Y1ZC5qcGVn.webp",
        },
        {
            songName:'e-0',
            singer:'e0',
            songPic:"https://img.colorhub.me/GXi7h2upf9Y/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vZDAvZGQvYzFlOTkzNjFkMmM2NmRhZGRlYTk5NTFlYzBlYjdjNGViYjZiZDBkZC5qcGVn.webp",
        },
        {
            songName:'f-0',
            singer:'f0',
            songPic:"https://img.colorhub.me/8DLfPYjf4_U/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMWQvNDkvMDM4NGZiNTYxM2UyZGE0NmIwMmE5N2RlNTc1ZjNlNmM1NTg3MWQ0OS5qcGVn.webp",
        },
        {
            songName:'g-0',
            singer:'g0',
            songPic:"https://img.colorhub.me/zPnfoHxlxYQ/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vYmYvYzIvODllMTQwNDRmMTU1ZjJkYjc1ZDQ3MzRlNWM4MzM5MzJkYmM1YmZjMi5qcGVn.webp",
        },
        {
            songName:'h-0',
            singer:'h0',
            songPic:"https://photo.colorhub.me/ymTfskrwf3o/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNWQvYzUvNTBlOThhZGY0OTAyMTg1ODg4YWYzMmU2MTVmNTRmY2ZiMDQyNWRjNS5qcGc.webp",
        },
        {
            songName:'i-0',
            singer:'i0',
            songPic:"https://cdn.colorhub.me/ZlukudGVPRg/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMGQvNjIvOTU5YmIzZTMyNTRiZmM4OWM2ZTBkZDE5NDlkMmI3OTI3MTI1MGQ2Mi5qcGVn.webp",
        },
        {
            songName:'j-0',
            singer:'j0',
            songPic:"https://img.colorhub.me/DegaGlMnCSI/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMDcvOTkvMjUyMDZjNWJjNDQyMzM5ZjZjMGFlMTRjZDZhMjU4YTBkMjM2MDc5OS5qcGVn.webp",
        },
    ],
    songUrl:[
        "http://music.163.com/song/media/outer/url?id=1838919030.mp3",
        "http://music.163.com/song/media/outer/url?id=1397345903.mp3",
        "http://music.163.com/song/media/outer/url?id=2063850887.mp3",
        "http://music.163.com/song/media/outer/url?id=2096916430.mp3",
        "http://music.163.com/song/media/outer/url?id=1919430638.mp3",
        "http://music.163.com/song/media/outer/url?id=2068064661.mp3",
        "http://music.163.com/song/media/outer/url?id=1862296245.mp3",
        "http://music.163.com/song/media/outer/url?id=2000959931.mp3",
        "http://music.163.com/song/media/outer/url?id=2070261075.mp3",
        "http://music.163.com/song/media/outer/url?id=378373.mp3",
    ],
    current: 0
} );

export const store1 = reactive({
    storename:'store1',
    isPlay: false,
    currentTime: 0,
    endTime: 0,
    songList: [
        {
            songName:'a',
            singer:'a1',
            songPic:"https://photo.colorhub.me/dSlX9AxjN-g/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vZjQvZjYvZTE3NWI1YjRmYmEwMmVhNjM5ZWFkMmRkMzhiMmJmYTZiZGMwZjRmNi5qcGc.webp"
        },
        {
            songName:'b',
            singer:'b1',
            songPic:"https://cdn.colorhub.me/WhuYAeyexF0/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNGMvMTYvMTk5ZjExMDBkMzBjZWVlYzU0MDE4YzVkMDNhYzNlOTBiNjI1NGMxNi5qcGc.webp",
        },
        {
            songName:'c',
            singer:'c1',
            songPic:"https://img.colorhub.me/AlIVbs_-drU/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNmQvOTMvMzI3MmFhNThhN2VlZmFjMDIxOWYyMzVmNDFkZDEwN2MzZWNkNmQ5My5qcGc.webp",
        },
        {
            songName:'d',
            singer:'d1',
            songPic:"https://cdn.colorhub.me/ooSHzVa3UWg/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vY2YvNWQvNTZhMzdjODBlNzRiMTJhMTFjMDFhZmViYjk3OWJiN2Y2N2UyY2Y1ZC5qcGVn.webp",
        },
        {
            songName:'e',
            singer:'e1',
            songPic:"https://img.colorhub.me/GXi7h2upf9Y/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vZDAvZGQvYzFlOTkzNjFkMmM2NmRhZGRlYTk5NTFlYzBlYjdjNGViYjZiZDBkZC5qcGVn.webp",
        },
        {
            songName:'f',
            singer:'f1',
            songPic:"https://img.colorhub.me/8DLfPYjf4_U/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMWQvNDkvMDM4NGZiNTYxM2UyZGE0NmIwMmE5N2RlNTc1ZjNlNmM1NTg3MWQ0OS5qcGVn.webp",
        },
        {
            songName:'g',
            singer:'g1',
            songPic:"https://img.colorhub.me/zPnfoHxlxYQ/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vYmYvYzIvODllMTQwNDRmMTU1ZjJkYjc1ZDQ3MzRlNWM4MzM5MzJkYmM1YmZjMi5qcGVn.webp",
        },
        {
            songName:'h',
            singer:'h1',
            songPic:"https://photo.colorhub.me/ymTfskrwf3o/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNWQvYzUvNTBlOThhZGY0OTAyMTg1ODg4YWYzMmU2MTVmNTRmY2ZiMDQyNWRjNS5qcGc.webp",
        },
        {
            songName:'i',
            singer:'i1',
            songPic:"https://cdn.colorhub.me/ZlukudGVPRg/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMGQvNjIvOTU5YmIzZTMyNTRiZmM4OWM2ZTBkZDE5NDlkMmI3OTI3MTI1MGQ2Mi5qcGVn.webp",
        },
        {
            songName:'j',
            singer:'j1',
            songPic:"https://img.colorhub.me/DegaGlMnCSI/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMDcvOTkvMjUyMDZjNWJjNDQyMzM5ZjZjMGFlMTRjZDZhMjU4YTBkMjM2MDc5OS5qcGVn.webp",
        },
    ],
    songUrl:[
        "http://music.163.com/song/media/outer/url?id=1838919030.mp3",
        "http://music.163.com/song/media/outer/url?id=1397345903.mp3",
        "http://music.163.com/song/media/outer/url?id=2063850887.mp3",
        "http://music.163.com/song/media/outer/url?id=2096916430.mp3",
        "http://music.163.com/song/media/outer/url?id=1919430638.mp3",
        "http://music.163.com/song/media/outer/url?id=2068064661.mp3",
        "http://music.163.com/song/media/outer/url?id=1862296245.mp3",
        "http://music.163.com/song/media/outer/url?id=2000959931.mp3",
        "http://music.163.com/song/media/outer/url?id=2070261075.mp3",
        "http://music.163.com/song/media/outer/url?id=378373.mp3",
    ],
    current: 0
});

export const store2 = reactive({
    storename:'store2',
    isPlay: false,
    currentTime: 0,
    endTime: 0,
    songList: [
        {
            songName:'a-two',
            singer:'a2',
            songPic:"https://photo.colorhub.me/dSlX9AxjN-g/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vZjQvZjYvZTE3NWI1YjRmYmEwMmVhNjM5ZWFkMmRkMzhiMmJmYTZiZGMwZjRmNi5qcGc.webp"
        },
        {
            songName:'b-two',
            singer:'b2',
            songPic:"https://cdn.colorhub.me/WhuYAeyexF0/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNGMvMTYvMTk5ZjExMDBkMzBjZWVlYzU0MDE4YzVkMDNhYzNlOTBiNjI1NGMxNi5qcGc.webp",
        },
        {
            songName:'c-two',
            singer:'c2',
            songPic:"https://img.colorhub.me/AlIVbs_-drU/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNmQvOTMvMzI3MmFhNThhN2VlZmFjMDIxOWYyMzVmNDFkZDEwN2MzZWNkNmQ5My5qcGc.webp",
        },
        {
            songName:'d-two',
            singer:'d2',
            songPic:"https://cdn.colorhub.me/ooSHzVa3UWg/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vY2YvNWQvNTZhMzdjODBlNzRiMTJhMTFjMDFhZmViYjk3OWJiN2Y2N2UyY2Y1ZC5qcGVn.webp",
        },
        {
            songName:'e-two',
            singer:'e2',
            songPic:"https://img.colorhub.me/GXi7h2upf9Y/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vZDAvZGQvYzFlOTkzNjFkMmM2NmRhZGRlYTk5NTFlYzBlYjdjNGViYjZiZDBkZC5qcGVn.webp",
        },
        {
            songName:'f-two',
            singer:'f2',
            songPic:"https://img.colorhub.me/8DLfPYjf4_U/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMWQvNDkvMDM4NGZiNTYxM2UyZGE0NmIwMmE5N2RlNTc1ZjNlNmM1NTg3MWQ0OS5qcGVn.webp",
        },
        {
            songName:'g-two',
            singer:'g2',
            songPic:"https://img.colorhub.me/zPnfoHxlxYQ/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vYmYvYzIvODllMTQwNDRmMTU1ZjJkYjc1ZDQ3MzRlNWM4MzM5MzJkYmM1YmZjMi5qcGVn.webp",
        },
        {
            songName:'h-two',
            singer:'h2',
            songPic:"https://photo.colorhub.me/ymTfskrwf3o/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNWQvYzUvNTBlOThhZGY0OTAyMTg1ODg4YWYzMmU2MTVmNTRmY2ZiMDQyNWRjNS5qcGc.webp",
        },
        {
            songName:'i-two',
            singer:'i2',
            songPic:"https://cdn.colorhub.me/ZlukudGVPRg/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMGQvNjIvOTU5YmIzZTMyNTRiZmM4OWM2ZTBkZDE5NDlkMmI3OTI3MTI1MGQ2Mi5qcGVn.webp",
        },
        {
            songName:'j-two',
            singer:'j2',
            songPic:"https://img.colorhub.me/DegaGlMnCSI/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMDcvOTkvMjUyMDZjNWJjNDQyMzM5ZjZjMGFlMTRjZDZhMjU4YTBkMjM2MDc5OS5qcGVn.webp",
        },
    ],
    songUrl:[
        "http://music.163.com/song/media/outer/url?id=1838919030.mp3",
        "http://music.163.com/song/media/outer/url?id=1397345903.mp3",
        "http://music.163.com/song/media/outer/url?id=2063850887.mp3",
        "http://music.163.com/song/media/outer/url?id=2096916430.mp3",
        "http://music.163.com/song/media/outer/url?id=1919430638.mp3",
        "http://music.163.com/song/media/outer/url?id=2068064661.mp3",
        "http://music.163.com/song/media/outer/url?id=1862296245.mp3",
        "http://music.163.com/song/media/outer/url?id=2000959931.mp3",
        "http://music.163.com/song/media/outer/url?id=2070261075.mp3",
        "http://music.163.com/song/media/outer/url?id=378373.mp3",
    ],
    current: 0
} );
