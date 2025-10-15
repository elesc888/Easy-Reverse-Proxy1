export let PORT = 370; // 端口

export interface Proxy {
    domain: string;
    url: string;
    enable: boolean;
    replaces?: {
        old: string,
        new: string
    }[];
}

// 代理
export let PROXYS = [ 
    {
        domain: "easy-reverse-proxy-git-main-elesc888s-projects.vercel.app",
        url: "https://app.yuntl.cc/apisms/",
        enable: true
    }
];
