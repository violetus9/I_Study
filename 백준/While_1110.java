package lego;

import java.util.Scanner;

public class While_1110 {
	
	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		
		int cnt = 0;
		int imsi = a;
		
		while(true) {
			cnt++;
			int sip = imsi/10;
			int il = imsi%10;
			int saegeo = sip + il;
			
			imsi = il*10 + saegeo%10;
			System.out.println(sip + "," + il + "," + saegeo + "," + imsi);
			
			if(imsi == a) {
				break;
			}
		}
		sc.close();
		System.out.println(cnt);
	}
}

