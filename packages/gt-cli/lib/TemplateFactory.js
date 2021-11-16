import SpecTpl from './templates/SpecTpl';
import SingleTpl from './templates/SingleTpl';
import TemplateGenerator from './TemplateGenerator';

/**
 * TemplateFactory
 */
class TemplateFactory {

  /**
   * Factory to generate the templates
   * @param cli options
   */
  static createTemplateFor( cli ) {
    /**
     * Generate all specs files
     */
    if( cli.gen ) {
      return new TemplateGenerator(new SpecTpl(cli.gen, cli.postfix));
    }

    /**
     * Generate spec single file component
     */
    if( cli.single ) {
      return new TemplateGenerator(new SingleTpl(cli.single, cli.folder));
    }

  }

}

export default TemplateFactory
