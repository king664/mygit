<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/static/vendors/Validform_v5.3.2/js/jquery-1.9.1.min.js">
<title>登陆</title>
</head>
<body>
<form action="/login/login.do" id="loginForm" method="post">
	<table align="center">
		<tr><td>用户名：</td><td><input id="username" type="text"></td></tr>
		<tr><td>密    码：</td><td><input id="password" type="password"></td></tr>
		<tr><td></td><td><input type="submit" id="login" value="登陆"></td></tr>
	</table>
	
</form>
</body>
</html>