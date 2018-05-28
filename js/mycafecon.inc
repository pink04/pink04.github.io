<%
Response.CharSet="UTF-8"
Session.codepage="65001"
Response.codepage="65001"
Response.ContentType="text/html;charset=UTF-8"

%>
<Object RUNAT="Server" PROGID="ADODB.Connection" ID="connDB"></Object>
<%
	on error resume Next
	connDB.Open "Dsn=newmycafe;User Id=hpmycafeuser;Password=user2@gil;"
%>