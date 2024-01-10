package JPMorgan.Java;

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

class Result {

  public static int truckTour(List<List<Integer>> petrolpumps){

    int start = 0;
    int end = 1;
    //set the starting fuel to the amount of the first pump minus the distance to the next pump
    int fuel = petrolpumps.get(start).get(0) - petrolpumps.get(start).get(1);

    while(start != end || fuel > 0){

      while(fuel < 0 && start != end){
        fuel -= petrolpumps.get(start).get(0) - petrolpumps.get(start).get(1);
        start = (start + 1) % (petrolpumps.size()/petrolpumps.get(0).size());
          
        if(start == 0){
          return -1;
        }
      }
      fuel += petrolpumps.get(end).get(0) - petrolpumps.get(end).get(1);
      end = (end + 1) % (petrolpumps.size()/petrolpumps.get(0).size())
    }
    return start;
  }
}