package sam;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * Created by Administrator on 2015/12/15 0015.
 */

public class CountTask {
    private static int i = 0;

    @Scheduled(fixedRate = 1000)
    public void exec(){
        System.out.println("current i:" + i++);
    }
}
