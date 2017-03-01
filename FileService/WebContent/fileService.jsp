
<%@page import="com.p.file.search.FileSearcher"%>

<%String fileName=request.getParameter("fileName"); %>

<%=new FileSearcher().startSearch(fileName)%>