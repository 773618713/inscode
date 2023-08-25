package com.scy.inscode.controller;

import com.scy.frame.controller.BaseController;
import com.scy.frame.util.RequestContextUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLEncoder;

@RestController
public class DataBaseController extends BaseController {

    @RequestMapping("dataBase/downloadDataBaseFile")
    public Object downloadDataBaseFile(HttpServletRequest request, HttpServletResponse response) throws IOException {
        /*URL resource = this.getClass().getResource("");
        ClassLoader classLoader = ClassLoader.getSystemClassLoader();
        InputStream inputStream = classLoader.getResourceAsStream("static/images/Flower.heic");*/

        InputStream inputStream = ClassLoader.getSystemClassLoader().getResourceAsStream("db/mydb.db");
        ServletOutputStream outputStream = response.getOutputStream();

        String fileName = URLEncoder.encode("mydb.db", "UTF-8");
        // 设置文件头：最后一个参数是设置下载文件名
        response.setHeader("Content-disposition", "attachment; filename=" + fileName);
        // 设置文件ContentType类型，这样设置，会自动判断下载文件类型
        response.setContentType("multipart/form-data");
        //response.setContentType("application/vnd.ms-excel;charset=utf-8");
        response.setCharacterEncoding("utf-8");

        byte[] bytes = new byte[1024];
        int len;
        while ((len = inputStream.read(bytes)) != -1) {
            outputStream.write(bytes, 0, len);
        }
        outputStream.close();
        inputStream.close();
        return null;
    }
}
