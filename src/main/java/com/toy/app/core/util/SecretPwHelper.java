package com.toy.app.core.util;

public class SecretPwHelper {

	public static String encryptPw(String userPw) {
		
		return userPw.replace("a", "!")
				.replace("c", "#")
				.replace("d", "$")
				.replace("e", "%")
				.replace("f", "^")
				.replace("g", "&")
				.replace("h", "*")
				.replace("i", "(")
				.replace("j", ")")
				.replace("o", "_")
				.replace("p", "+")
				.replace("q", "-")
				.replace("r", "=")
				.replace("s", "`")
				.replace("t", "~")
				.replace("u", "?")
				.replace("v", ">")
				.replace("1", "<")
				.replace("2", ":")
				.replace("3", ",")
				.replace("5", "{")
				.replace("6", "}")
				.replace("7", "[")
				.replace("8", "]");
	}

	public static String decryptPw(String userPw) {
		
		return userPw.replace("!", "a")
				.replace("#", "c")
				.replace("$", "d")
				.replace("%", "e")
				.replace("^", "f")
				.replace("&", "g")
				.replace("*", "h")
				.replace("(", "i")
				.replace(")", "j")
				.replace("_", "o")
				.replace("+", "p")
				.replace("-", "q")
				.replace("=", "r")
				.replace("`", "s")
				.replace("~", "t")
				.replace("?", "u")
				.replace(">", "v")
				.replace("<", "1")
				.replace(":", "2")
				.replace(",", "3")
				.replace("{", "5")
				.replace("}", "6")
				.replace("[", "7")
				.replace("]", "8");
	}
}
