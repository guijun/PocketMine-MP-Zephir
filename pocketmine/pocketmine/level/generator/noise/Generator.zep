/*
 *
 *  ____            _        _   __  __ _                  __  __ ____  
 * |  _ \ ___   ___| | _____| |_|  \/  (_)_ __   ___      |  \/  |  _ \ 
 * | |_) / _ \ / __| |/ / _ \ __| |\/| | | '_ \ / _ \_____| |\/| | |_) |
 * |  __/ (_) | (__|   <  __/ |_| |  | | | | | |  __/_____| |  | |  __/ 
 * |_|   \___/ \___|_|\_\___|\__|_|  |_|_|_| |_|\___|     |_|  |_|_| 
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * @author PocketMine Team
 * @link http://www.pocketmine.net/
 * 
 *
*/

namespace PocketMine\Level\Generator\Noise;

abstract class Generator{
	protected perm = [];
	protected offsetX = 0;
	protected offsetY = 0;
	protected offsetZ = 0;
	protected octaves = 8;
	protected frequency;
	protected amplitude;
	
	public static function floor(const double x) -> long{
		return x >= 0 ? (long) x : (long) x - 1;
	}
	
	public static function fade(const double x) -> double{
		return x * x * x * (x * (x * 6 - 15) + 10);
	}
	
	public static function lerp(const double x, const double y, const double z) -> double{
		return y + x * (z - y);
	}
	
	public static function grad(int hash, const double x, const double y, const double z) -> double{
		double u;
		double v;
		let hash = hash & 15;
		let u = hash < 8 ? x : y;
		let v = hash < 4 ? y : ((hash == 12 || hash == 14) ? x : z);
		
		return ((hash & 1) == 0 ? u : -u) + ((hash & 2) == 0 ? v : -v);
	}
	
	abstract public function getNoise2D(double x, double z) -> double{
	
	}
	
	abstract public function getNoise3D(double x, double y, double z) -> double{
	
	}
	
	public function noise2D(const double x, const double z, const boolean normalized = false) -> double{
		double result = 0;
		double amp = 1;
		double freq = 1;
		double max = 0;
		int i = 0;
		
		while(i < this->octaves){
			let result += (double) this->getNoise2D(x * freq, z * freq) * amp;
			let max += amp;
			let freq *= this->frequency;
			let amp *= this->amplitude;
			let i++;
		}
		
		if(normalized === true){
			let result = result / max;
		}
		
		return result;
	}
	
	public function noise3D(const double x, const double y, const double z, const boolean normalized = false) -> double{
		double result = 0;
		double amp = 1;
		double freq = 1;
		double max = 0;
		int i = 0;
		
		while(i < this->octaves){
			let result += (double) this->getNoise3D(x * freq, y * freq, z * freq) * amp;
			let max += amp;
			let freq *= this->frequency;
			let amp *= this->amplitude;
			let i++;
		}
		
		if(normalized === true){
			let result = result / max;
		}
		
		return result;
	}

	public function setOffset(const double x, const double y, const double z) -> void{
		let this->offsetX = x;
		let this->offsetY = y;
		let this->offsetZ = z;
	}
}