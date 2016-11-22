void main( void ) {
    vec2 mouse_pos = vec2(0.5 * mousePosition.x, 0.5 * (resolution.y - mousePosition.y));
    float mouse_distance = pow(distance(gl_FragCoord.xy, mouse_pos), 0.6) * 0.3;

    float offset = snoise(mouse_distance * vec3(gl_FragCoord.x * 0.01 - mouse_pos.x * 0.01, gl_FragCoord.y * 0.01 - mouse_pos.y * 0.01, 0.0));
    vec2 cell = cellular(vec3(gl_FragCoord.x * 0.05 + sin(time * 2.0), gl_FragCoord.y * 0.05 + sin(2.0 * time), mouse_distance));


    gl_FragColor = vec4(
      mix(cell.x, cell.y, mouse_pos.x / resolution.x),
      mix(cell.y, cell.x, mouse_pos.y / resolution.y),
      0,
      1.0
    );
}
