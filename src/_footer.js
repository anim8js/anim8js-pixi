

  // Register Factory
  anim8.Factories['pixi'] = new FactoryPixi();

  // Classes
  anim8.AnimatorPixi = AnimatorPixi;
  anim8.FactoryPixi = FactoryPixi;

  // Namespace
  anim8.pixi = {
    Attributes:           Attributes,
    attribute:            $attribute,
    Dynamics:             Dynamics,
    dynamic:              $dynamic,
    getRGB:               getRGB
  };

  return anim8;

}));
