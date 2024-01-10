package JPMorgan.Java;

import java.io.*;
import java.util.*;

class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        
        Scanner scanner = new Scanner(System.in);
        int queries = scanner.nextInt();
        scanner.nextLine();
        
        TextEditor textEditor = new TextEditor();
        
        for(int i = 0; i < queries; i++){
            String[] operation = scanner.nextLine().split(" ");
            int type = Integer.parseInt(operation[0]);
            
            switch(type){
                case 1:
                    textEditor.append(operation[1]);
                    break;
                case 2:
                    textEditor.delete(Integer.parseInt(operation[1]));
                    break;
                case 3:
                    textEditor.print(Integer.parseInt(operation[1]));
                    break;
                case 4:
                    textEditor.undo();
                    break;
            }
        }
    scanner.close();        
    }
}

class TextEditor {
    private StringBuilder content;
    private Stack<String> history;
    
    public TextEditor(){
        this.content = new StringBuilder();
        this.history = new Stack<>();
    }
    
    public void append(String str){
        history.push(content.toString());
        content.append(str);
    }
    
    public void delete(int k){
        history.push(content.toString());
        int length = content.length();
        content.delete(length - k, length);
    }
    
    public void print(int k){
        System.out.println(content.charAt(k-1));
    }
    
    public void undo(){
        if(!history.isEmpty()){
            content = new StringBuilder(history.pop());
        }
    }
}

