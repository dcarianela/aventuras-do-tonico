const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Plugins.Audio,
		C3.Plugins.Text,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.Else,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{fundoGame: 0},
	{espinhos: 0},
	{Sólido: 0},
	{blocoChao: 0},
	{blocoAereo: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{Tonico: 0},
	{Teclado: 0},
	{moeda: 0},
	{Áudio: 0},
	{pontuacao: 0},
	{pontos: 0}
];

self.InstanceType = {
	fundoGame: class extends self.ITiledBackgroundInstance {},
	espinhos: class extends self.ITiledBackgroundInstance {},
	blocoChao: class extends self.ITiledBackgroundInstance {},
	blocoAereo: class extends self.ITiledBackgroundInstance {},
	Tonico: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	moeda: class extends self.ISpriteInstance {},
	Áudio: class extends self.IInstance {},
	pontuacao: class extends self.ITextInstance {}
}