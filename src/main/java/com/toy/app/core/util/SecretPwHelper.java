package com.toy.app.core.util;

public class SecretPwHelper {

	public static String encryptPw(String userPw) {
		
		userPw.replace("a", "!");
		userPw.replace("b", "@");
		userPw.replace("c", "#");
		userPw.replace("d", "$");
		userPw.replace("e", "%");
		userPw.replace("f", "^");
		userPw.replace("g", "&");
		userPw.replace("h", "*");
		userPw.replace("i", "(");
		userPw.replace("j", ")");
		userPw.replace("o", "_");
		userPw.replace("p", "+");
		userPw.replace("q", "-");
		userPw.replace("r", "=");
		userPw.replace("s", "`");
		userPw.replace("t", "~");
		userPw.replace("u", "?");
		userPw.replace("v", ">");
		userPw.replace("1", "<");
		userPw.replace("2", ":");
		userPw.replace("3", ",");
		userPw.replace("4", ".");
		userPw.replace("5", "{");
		userPw.replace("6", "}");
		userPw.replace("7", "[");
		userPw.replace("8", "]");

		return userPw;
	}

	public static String decryptPw(String userPw) {
		
		userPw.replace("!", "a");
		userPw.replace("@", "b");
		userPw.replace("#", "c");
		userPw.replace("$", "d");
		userPw.replace("%", "e");
		userPw.replace("^", "f");
		userPw.replace("&", "g");
		userPw.replace("*", "h");
		userPw.replace("(", "i");
		userPw.replace(")", "j");
		userPw.replace("_", "o");
		userPw.replace("+", "p");
		userPw.replace("-", "q");
		userPw.replace("=", "r");
		userPw.replace("`", "s");
		userPw.replace("~", "t");
		userPw.replace("?", "u");
		userPw.replace(">", "v");
		userPw.replace("<", "1");
		userPw.replace(":", "2");
		userPw.replace(",", "3");
		userPw.replace(".", "4");
		userPw.replace("{", "5");
		userPw.replace("}", "6");
		userPw.replace("[", "7");
		userPw.replace("]", "8");

		return userPw;
	}
}
