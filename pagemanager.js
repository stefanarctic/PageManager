/*
*
* Copyright Stefanarctic (C)
*
*/

export const getPageProperties = () => {
    let properties = document.location.search;
    properties = properties.replace("?", "");
    const variables = properties.split("&");
    const arr = [];
    for(const variable of variables) {
        arr.push(variable.replace("%20", " ").split("="));
    }
    return arr;
}

export const GetSiteRoot = () => {
    let rootPath = window.location.protocol + "//" + window.location.host + "/";
    if (window.location.hostname == "localhost")
    {
        var path = window.location.pathname;
        if (path.indexOf("/") == 0)
        {
            path = path.substring(1);
        }
        path = path.split("/", 1);
        if (path != "")
        {
            rootPath += path + "/";
        }
    }
    return rootPath;
}

export const GetAbsolutePath = () => {
    let arr = GetSiteRoot().split("");
    arr.pop();
    return arr.join("") + window.location.pathname;
}
