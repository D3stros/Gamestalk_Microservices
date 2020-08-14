package registration;

import com.Register.registermicroservice.RegisterMicroserviceApplication;
import com.Register.registermicroservice.model.User;
import com.Register.registermicroservice.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.Instant;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;

@SpringBootTest(classes= RegisterMicroserviceApplication.class)
public class RegistrationTest {
    @Autowired
    private UserRepository underTest;

    @Test
    void itShouldRegisterUser() {
        //Given
        Long id = ThreadLocalRandom.current().nextLong(10);
        Instant date = Instant.now();
        User user = new User(id, "Test", "123", "test@gmail.com", date, false);

        // When
        underTest.save(user);

        //Then
        Optional<User> optionalUser = underTest.findById(id);
        assertThat(optionalUser)
                .isPresent()
                .hasValueSatisfying(c -> {
                    assertThat(c.getUserId()).isEqualTo(id);
                    assertThat(c.getUsername()).isEqualTo("Test");
                    assertThat(c.getCreated()).isEqualTo(date);
                    assertThat(c.isEnabled()).isEqualTo(false);
                });
    }
}
