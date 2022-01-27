/*
*
* Copyright Stefanarctic (C)
*
*/

export const getPageProperties = () => {
    let properties = document.location.search;
    properties = properties.replace("?", "");
    const variables = properties.split("&");
    let obj = {};
    for(const variable of variables) {
        variable = variable.replace("%20", "");
        const [property, value] = variable.split("=");
        obj[property] = value;
    }
    return obj;
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

export const download = (data, filename, type) => {
    const file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        const a = document.createElement("a"),
        url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
