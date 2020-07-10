package org.makewater.elequachallenges.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    DataSource dataSource;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Autowired
    public void configAuthentication(AuthenticationManagerBuilder auth)
        throws Exception {

        auth.jdbcAuthentication().dataSource(dataSource)
            .passwordEncoder(passwordEncoder())
            .usersByUsernameQuery("{SQL}") //SQL query
            .authoritiesByUsernameQuery("{SQL}"); //SQL query
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.formLogin();

        http
            .csrf().disable()
            .authorizeRequests()
                .anyRequest().permitAll();
    }
}