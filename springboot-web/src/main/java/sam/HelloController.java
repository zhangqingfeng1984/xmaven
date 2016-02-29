package sam;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HelloController {

    @RequestMapping("/greeting")
    public Person greeting(@RequestParam(value = "name", defaultValue = "spring") String name) {
        Person p = new Person();
        p.setName("sam");
        p.setAge(18);
        p.setHobbies(new String[]{"game", "coding"});
        return p;
    }
}
