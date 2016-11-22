void main( void ) {
    vec2 mouse_pos = vec2(mousePosition.x, resolution.y - mousePosition.y);
    float mouse_distance = pow(distance(gl_FragCoord.xy, mouse_pos), 0.6) * 0.3;

    vec2 cell = cellular(vec3(gl_FragCoord.x * 0.05 + sin(time * 2.0), gl_FragCoord.y * 0.05 + sin(2.0 * time), mouse_distance));
    gl_FragColor = vec4(
      cell.x,
      cell.x,
      cell.x,
      1.0
    );
}
