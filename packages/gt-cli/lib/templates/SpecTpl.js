/**
 * SpecTpl
 */
class SpecTpl {
  /**
   *
   * @param name - the Spec name
   */
  constructor( name, postfix ) {
    this.type = 'Specs';
    this.isDir = true;
    this.name = postfix ? `${name}.${postfix}` : name;
  }
}

export default SpecTpl