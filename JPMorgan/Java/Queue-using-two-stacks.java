package JPMorgan.Java;


import java.io.*;
import java.util.*;

class Solution {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int queries = scanner.nextInt();
        MyQueue<Integer> myQueue = new MyQueue<>();

        for (int i = 0; i < queries; i++) {
            int operation = scanner.nextInt();

            switch (operation) {
                case 1:
                    // Enqueue operation
                    int value = scanner.nextInt();
                    myQueue.enqueue(value);
                    break;

                case 2:
                    // Dequeue operation
                    myQueue.dequeue();
                    break;

                case 3:
                    // Print front element
                    System.out.println(myQueue.peek());
                    break;
            }
        }

        scanner.close();
    }

    static class MyQueue<T> {
        private Stack<T> stack1 = new Stack<>();
        private Stack<T> stack2 = new Stack<>();

        public void enqueue(T value) {
            // Simply push the value onto stack1
            stack1.push(value);
        }

        public void dequeue() {
            // If stack2 is empty, transfer elements from stack1 to stack2
            if (stack2.isEmpty()) {
                while (!stack1.isEmpty()) {
                    stack2.push(stack1.pop());
                }
            }

            // Pop the front element from stack2 (or print nothing if both stacks are empty)
            if (!stack2.isEmpty()) {
                stack2.pop();
            }
        }

        public T peek() {
            // If stack2 is empty, transfer elements from stack1 to stack2
            if (stack2.isEmpty()) {
                while (!stack1.isEmpty()) {
                    stack2.push(stack1.pop());
                }
            }

            // Return the front element from stack2 (or return null if both stacks are empty)
            return stack2.isEmpty() ? null : stack2.peek();
        }
    }
}

