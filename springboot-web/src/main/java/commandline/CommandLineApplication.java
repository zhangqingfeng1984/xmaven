package commandline;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Created by Administrator on 2015/12/15 0015.
 */

public class CommandLineApplication implements CommandLineRunner {

    @Override
    public void run(String... strings) throws Exception {
        System.out.println("command line app ... working");
    }

//    public static void main(String[] args) {
//        SpringApplication.run(CommandLineApplication.class, args);
//    }
}
