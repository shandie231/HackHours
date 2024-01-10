package JPMorgan.Java;

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'caesarCipher' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts following parameters:
     *  1. STRING s
     *  2. INTEGER k
     */

    public static String caesarCipher(String s, int k) {
    // Write your code here
    char letter = 'z';
    char newLetter = (char) (letter + 2);
    System.out.println(newLetter + ": New Letter");

    StringBuilder output = new StringBuilder();
    
    for(int i = 0; i < s.length(); i++){
        char currChar = s.charAt(i);
        //this conditional indicates the character is of the alhabet
        if(Character.isUpperCase(currChar)){
            char updatedChar = (char) ((currChar + k - 65) % 26 + 65);
            output.append(updatedChar);
        }else if (Character.isLowerCase(currChar)){
            char updatedChar = (char) ((currChar + k - 97) % 26 + 97);
            output.append(updatedChar);
        }else{
            output.append(currChar);
        }
        
    }
    return output.toString();
    }

}

class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        String s = bufferedReader.readLine();

        int k = Integer.parseInt(bufferedReader.readLine().trim());

        String result = Result.caesarCipher(s, k);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}