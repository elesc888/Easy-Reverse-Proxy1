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
        domain: "uk.vinted.lol",
        url: "https://www.mysms.one/api/",
        enable: true
    }
];
