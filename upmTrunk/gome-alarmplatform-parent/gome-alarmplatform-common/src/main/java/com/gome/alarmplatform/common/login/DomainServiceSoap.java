package com.gome.alarmplatform.common.login;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.ws.RequestWrapper;
import javax.xml.ws.ResponseWrapper;

/**
 * This class was generated by Apache CXF 2.6.1
 * 2016-04-14T16:52:43.914+08:00
 * Generated source version: 2.6.1
 * 
 */
@WebService(targetNamespace = "http://tempuri.org/", name = "DomainServiceSoap")
@XmlSeeAlso({ObjectFactory.class})
public interface DomainServiceSoap {

    @WebResult(name = "ValidLogonResult", targetNamespace = "http://tempuri.org/")
    @RequestWrapper(localName = "ValidLogon", targetNamespace = "http://tempuri.org/", className = "com.gome.gmp.ws.login.pi.ValidLogon")
    @WebMethod(operationName = "ValidLogon", action = "http://tempuri.org/ValidLogon")
    @ResponseWrapper(localName = "ValidLogonResponse", targetNamespace = "http://tempuri.org/", className = "com.gome.gmp.ws.login.pi.ValidLogonResponse")
    public java.lang.String validLogon(
        @WebParam(name = "userName", targetNamespace = "http://tempuri.org/")
        java.lang.String userName,
        @WebParam(name = "userPwd", targetNamespace = "http://tempuri.org/")
        java.lang.String userPwd
    );
}
